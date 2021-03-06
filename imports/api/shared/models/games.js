import SimpleSchema from "simpl-schema";

export const Games = new Mongo.Collection("games");

Games.schema = new SimpleSchema({
	createdAt: { type: Date },
	score: { type: Number },
	userId: { type: String, optional: true },
	username: { type: String },
	words: { type: Array, optional: true },
	"words.$": { type: String, optional: true }
});

Games.publishedFields = {};

Games.attachSchema(Games.schema);
