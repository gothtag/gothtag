import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  discordHandle: text("discord_handle").notNull(),
  reason: text("reason").notNull(),
  experience: text("experience"),
  createdAt: timestamp("created_at").defaultNow(),
  status: text("status", { enum: ["pending", "approved", "rejected"] }).default("pending"),
});

export const insertApplicationSchema = createInsertSchema(applications).omit({ 
  id: true, 
  createdAt: true,
  status: true 
});

export type Application = typeof applications.$inferSelect;
export type InsertApplication = z.infer<typeof insertApplicationSchema>;

export type CreateApplicationRequest = InsertApplication;
export type ApplicationResponse = Application;
