// Type definitions for Notice Management System

export interface Notice {
  id: string;
  title: string;
  link: string; // Google Drive link for downloading the notice
  date: string;
  category: "Academic" | "Administrative" | "Events" | "Examination" | "Holiday";
  active: boolean;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

export interface NoticeFormData {
  title: string;
  link: string;
  date: string;
  category: string;
  active: boolean;
}
