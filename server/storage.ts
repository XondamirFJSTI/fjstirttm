import {
  type Staff, type InsertStaff,
  type News, type InsertNews,
  type Course, type InsertCourse,
  type Registration, type InsertRegistration
} from "@shared/schema";

export interface IStorage {
  // Staff
  getStaff(): Promise<Staff[]>;
  getStaffMember(id: number): Promise<Staff | undefined>;
  createStaffMember(staff: InsertStaff): Promise<Staff>;
  
  // News
  getNews(): Promise<News[]>;
  getNewsItem(id: number): Promise<News | undefined>;
  createNews(news: InsertNews): Promise<News>;
  
  // Courses
  getCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;
  
  // Registrations
  getRegistrations(): Promise<Registration[]>;
  createRegistration(reg: InsertRegistration): Promise<Registration>;
  updateRegistrationStatus(id: number, status: string): Promise<Registration>;
}

export class MemStorage implements IStorage {
  private staff: Map<number, Staff>;
  private news: Map<number, News>;
  private courses: Map<number, Course>;
  private registrations: Map<number, Registration>;
  private currentIds: { [key: string]: number };

  constructor() {
    this.staff = new Map();
    this.news = new Map();
    this.courses = new Map();
    this.registrations = new Map();
    this.currentIds = { staff: 1, news: 1, courses: 1, registrations: 1 };
  }

  // Staff
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

  // News
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

  // Courses
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

  // Registrations
  async getRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrations.values());
  }

  async createRegistration(data: InsertRegistration): Promise<Registration> {
    const id = this.currentIds.registrations++;
    const registration = { ...data, id };
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
}

export const storage = new MemStorage();
