import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const TransactionSchema = new Schema(
	{
		price: {
			type: mongoose.Types.Currency,
			Currency: "USD",
			get: (v) => v / 100,
		},
		expense: {
			type: mongoose.Types.Currency,
			Currency: "USD",
			get: (v) => v / 100,
		},
		productIds: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Transaction",
			},
		],
	},
	{ timestamps: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
