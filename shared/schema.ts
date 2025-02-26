import { pgTable, text, serial, timestamp, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const staff = pgTable("staff", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  bio: text("bio").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  date: timestamp("date").notNull().defaultNow(),
});

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  duration: text("duration").notNull(),
});

export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  courseId: integer("course_id").notNull(),
  status: text("status").notNull().default("pending"),
});

export const videos = pgTable("videos", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  videoUrl: text("video_url").notNull(),
  courseId: integer("course_id").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const tests = pgTable("tests", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  questions: jsonb("questions").notNull(), 
  courseId: integer("course_id").notNull(),
  duration: integer("duration").notNull(), 
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const testResults = pgTable("test_results", {
  id: serial("id").primaryKey(),
  testId: integer("test_id").notNull(),
  userId: text("user_id").notNull(), 
  score: integer("score").notNull(),
  answers: jsonb("answers").notNull(), 
  completedAt: timestamp("completed_at").notNull().defaultNow(),
});

export const insertStaffSchema = createInsertSchema(staff);
export const insertNewsSchema = createInsertSchema(news);
export const insertCourseSchema = createInsertSchema(courses);
export const insertRegistrationSchema = createInsertSchema(registrations);
export const insertVideoSchema = createInsertSchema(videos);
export const insertTestSchema = createInsertSchema(tests);
export const insertTestResultSchema = createInsertSchema(testResults);

export type Staff = typeof staff.$inferSelect;
export type News = typeof news.$inferSelect;
export type Course = typeof courses.$inferSelect;
export type Registration = typeof registrations.$inferSelect;
export type Video = typeof videos.$inferSelect;
export type Test = typeof tests.$inferSelect;
export type TestResult = typeof testResults.$inferSelect;

export type InsertStaff = z.infer<typeof insertStaffSchema>;
export type InsertNews = z.infer<typeof insertNewsSchema>;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type InsertVideo = z.infer<typeof insertVideoSchema>;
export type InsertTest = z.infer<typeof insertTestSchema>;
export type InsertTestResult = z.infer<typeof insertTestResultSchema>;