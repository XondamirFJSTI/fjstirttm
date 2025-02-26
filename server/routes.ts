import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertStaffSchema,
  insertNewsSchema,
  insertCourseSchema,
  insertRegistrationSchema,
  insertVideoSchema,
  insertTestSchema,
  insertTestResultSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Staff routes
  app.get("/api/staff", async (_req, res) => {
    const staff = await storage.getStaff();
    res.json(staff);
  });

  app.get("/api/staff/:id", async (req, res) => {
    const staff = await storage.getStaffMember(parseInt(req.params.id));
    if (!staff) return res.status(404).json({ message: "Staff member not found" });
    res.json(staff);
  });

  app.post("/api/staff", async (req, res) => {
    const parsed = insertStaffSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json(parsed.error);
    const staff = await storage.createStaffMember(parsed.data);
    res.json(staff);
  });

  // News routes
  app.get("/api/news", async (_req, res) => {
    const news = await storage.getNews();
    res.json(news);
  });

  app.get("/api/news/:id", async (req, res) => {
    const news = await storage.getNewsItem(parseInt(req.params.id));
    if (!news) return res.status(404).json({ message: "News item not found" });
    res.json(news);
  });

  app.post("/api/news", async (req, res) => {
    const parsed = insertNewsSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json(parsed.error);
    const news = await storage.createNews(parsed.data);
    res.json(news);
  });

  // Courses routes
  app.get("/api/courses", async (_req, res) => {
    const courses = await storage.getCourses();
    res.json(courses);
  });

  app.get("/api/courses/:id", async (req, res) => {
    const course = await storage.getCourse(parseInt(req.params.id));
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  });

  app.post("/api/courses", async (req, res) => {
    const parsed = insertCourseSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json(parsed.error);
    const course = await storage.createCourse(parsed.data);
    res.json(course);
  });

  // Registration routes
  app.get("/api/registrations", async (_req, res) => {
    const registrations = await storage.getRegistrations();
    res.json(registrations);
  });

  app.post("/api/registrations", async (req, res) => {
    const parsed = insertRegistrationSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json(parsed.error);
    const registration = await storage.createRegistration(parsed.data);
    res.json(registration);
  });

  app.patch("/api/registrations/:id/status", async (req, res) => {
    const { status } = req.body;
    if (typeof status !== "string") {
      return res.status(400).json({ message: "Invalid status" });
    }
    const registration = await storage.updateRegistrationStatus(parseInt(req.params.id), status);
    res.json(registration);
  });

  // New routes for videos
  app.get("/api/videos", async (req, res) => {
    const courseId = req.query.courseId ? parseInt(req.query.courseId as string) : undefined;
    const videos = await storage.getVideos(courseId);
    res.json(videos);
  });

  app.get("/api/videos/:id", async (req, res) => {
    const video = await storage.getVideo(parseInt(req.params.id));
    if (!video) return res.status(404).json({ message: "Video not found" });
    res.json(video);
  });

  app.post("/api/videos", async (req, res) => {
    const parsed = insertVideoSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json(parsed.error);
    const video = await storage.createVideo(parsed.data);
    res.json(video);
  });

  // New routes for tests
  app.get("/api/tests", async (req, res) => {
    const courseId = req.query.courseId ? parseInt(req.query.courseId as string) : undefined;
    const tests = await storage.getTests(courseId);
    res.json(tests);
  });

  app.get("/api/tests/:id", async (req, res) => {
    const test = await storage.getTest(parseInt(req.params.id));
    if (!test) return res.status(404).json({ message: "Test not found" });
    res.json(test);
  });

  app.post("/api/tests", async (req, res) => {
    const parsed = insertTestSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json(parsed.error);
    const test = await storage.createTest(parsed.data);
    res.json(test);
  });

  // New routes for test results
  app.get("/api/test-results", async (req, res) => {
    const userId = req.query.userId as string;
    if (!userId) return res.status(400).json({ message: "userId is required" });
    const results = await storage.getTestResults(userId);
    res.json(results);
  });

  app.get("/api/test-results/:id", async (req, res) => {
    const result = await storage.getTestResult(parseInt(req.params.id));
    if (!result) return res.status(404).json({ message: "Test result not found" });
    res.json(result);
  });

  app.post("/api/test-results", async (req, res) => {
    const parsed = insertTestResultSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json(parsed.error);
    const result = await storage.createTestResult(parsed.data);
    res.json(result);
  });

  const httpServer = createServer(app);
  return httpServer;
}