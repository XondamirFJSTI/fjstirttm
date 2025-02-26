import {
  type Staff, type InsertStaff,
  type News, type InsertNews,
  type Course, type InsertCourse,
  type Registration, type InsertRegistration,
  type Video, type InsertVideo,
  type Test, type InsertTest,
  type TestResult, type InsertTestResult
} from "@shared/schema";

export interface IStorage {
  // Existing methods
  getStaff(): Promise<Staff[]>;
  getStaffMember(id: number): Promise<Staff | undefined>;
  createStaffMember(staff: InsertStaff): Promise<Staff>;

  getNews(): Promise<News[]>;
  getNewsItem(id: number): Promise<News | undefined>;
  createNews(news: InsertNews): Promise<News>;

  getCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;

  getRegistrations(): Promise<Registration[]>;
  createRegistration(reg: InsertRegistration): Promise<Registration>;
  updateRegistrationStatus(id: number, status: string): Promise<Registration>;

  // New methods for videos
  getVideos(courseId?: number): Promise<Video[]>;
  getVideo(id: number): Promise<Video | undefined>;
  createVideo(video: InsertVideo): Promise<Video>;

  // New methods for tests
  getTests(courseId?: number): Promise<Test[]>;
  getTest(id: number): Promise<Test | undefined>;
  createTest(test: InsertTest): Promise<Test>;

  // New methods for test results
  getTestResults(userId: string): Promise<TestResult[]>;
  getTestResult(id: number): Promise<TestResult | undefined>;
  createTestResult(result: InsertTestResult): Promise<TestResult>;
}

export class MemStorage implements IStorage {
  private staff: Map<number, Staff>;
  private news: Map<number, News>;
  private courses: Map<number, Course>;
  private registrations: Map<number, Registration>;
  private videos: Map<number, Video>;
  private tests: Map<number, Test>;
  private testResults: Map<number, TestResult>;
  private currentIds: { [key: string]: number };

  constructor() {
    this.staff = new Map();
    this.news = new Map();
    this.courses = new Map();
    this.registrations = new Map();
    this.videos = new Map();
    this.tests = new Map();
    this.testResults = new Map();
    this.currentIds = {
      staff: 1,
      news: 1,
      courses: 1,
      registrations: 1,
      videos: 1,
      tests: 1,
      testResults: 1
    };
  }

  // Existing methods remain unchanged
  async getStaff(): Promise<Staff[]> {
    return Array.from(this.staff.values());
  }

  async getStaffMember(id: number): Promise<Staff | undefined> {
    return this.staff.get(id);
  }

  async createStaffMember(data: InsertStaff): Promise<Staff> {
    const id = this.currentIds.staff++;
    const staff = { ...data, id };
    this.staff.set(id, staff);
    return staff;
  }

  async getNews(): Promise<News[]> {
    return Array.from(this.news.values());
  }

  async getNewsItem(id: number): Promise<News | undefined> {
    return this.news.get(id);
  }

  async createNews(data: InsertNews): Promise<News> {
    const id = this.currentIds.news++;
    const news = { ...data, id, date: new Date() };
    this.news.set(id, news);
    return news;
  }

  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: number): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async createCourse(data: InsertCourse): Promise<Course> {
    const id = this.currentIds.courses++;
    const course = { ...data, id };
    this.courses.set(id, course);
    return course;
  }

  async getRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrations.values());
  }

  async createRegistration(data: InsertRegistration): Promise<Registration> {
    const id = this.currentIds.registrations++;
    const registration = { ...data, id, status: "pending" };
    this.registrations.set(id, registration);
    return registration;
  }

  async updateRegistrationStatus(id: number, status: string): Promise<Registration> {
    const registration = this.registrations.get(id);
    if (!registration) {
      throw new Error("Registration not found");
    }
    const updated = { ...registration, status };
    this.registrations.set(id, updated);
    return updated;
  }

  // New methods for videos
  async getVideos(courseId?: number): Promise<Video[]> {
    const videos = Array.from(this.videos.values());
    return courseId ? videos.filter(v => v.courseId === courseId) : videos;
  }

  async getVideo(id: number): Promise<Video | undefined> {
    return this.videos.get(id);
  }

  async createVideo(data: InsertVideo): Promise<Video> {
    const id = this.currentIds.videos++;
    const video = { ...data, id, createdAt: new Date() };
    this.videos.set(id, video);
    return video;
  }

  // New methods for tests
  async getTests(courseId?: number): Promise<Test[]> {
    const tests = Array.from(this.tests.values());
    return courseId ? tests.filter(t => t.courseId === courseId) : tests;
  }

  async getTest(id: number): Promise<Test | undefined> {
    return this.tests.get(id);
  }

  async createTest(data: InsertTest): Promise<Test> {
    const id = this.currentIds.tests++;
    const test = { ...data, id, createdAt: new Date() };
    this.tests.set(id, test);
    return test;
  }

  // New methods for test results
  async getTestResults(userId: string): Promise<TestResult[]> {
    return Array.from(this.testResults.values())
      .filter(r => r.userId === userId);
  }

  async getTestResult(id: number): Promise<TestResult | undefined> {
    return this.testResults.get(id);
  }

  async createTestResult(data: InsertTestResult): Promise<TestResult> {
    const id = this.currentIds.testResults++;
    const result = { ...data, id, completedAt: new Date() };
    this.testResults.set(id, result);
    return result;
  }
}

export const storage = new MemStorage();