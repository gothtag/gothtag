import { db } from "./db";
import {
  applications,
  type InsertApplication,
  type Application,
} from "@shared/schema";

export interface IStorage {
  createApplication(app: InsertApplication): Promise<Application>;
  getApplications(): Promise<Application[]>;
}

export class DatabaseStorage implements IStorage {
  async createApplication(insertApp: InsertApplication): Promise<Application> {
    const [app] = await db
      .insert(applications)
      .values(insertApp)
      .returning();
    return app;
  }

  async getApplications(): Promise<Application[]> {
    return await db.select().from(applications);
  }
}

export const storage = new DatabaseStorage();
