import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // Get all items in localStorage
  getAllItems(): any[] {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key: string | null = localStorage.key(i);
      if (key !== null) {
        const item = this.getItem(key);
        if (item !== null) {
          items.push(item);
        }
      }
    }
    return items;
  }
  
  // Get an item from localStorage by key
  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : null;
  }

  // Add an item to localStorage
  addItem(key: string, item: any): void {
    if (item !== null && item !== undefined) {
      localStorage.setItem(key, JSON.stringify(item));
    }
  }

  // Update an item in localStorage by key
  updateItem(key: string, newItem: any): void {
    if (newItem !== null && newItem !== undefined) {
      localStorage.setItem(key, JSON.stringify(newItem));
    }
  }

  // Delete an item from localStorage by key
  deleteItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Delete all items from localStorage
  deleteAllItems(): void {
    localStorage.clear();
  }

  // Check if item valid (exist and is not null or empty)
  isValid(key: string): boolean {
    const value = localStorage.getItem(key);

    if (!key || key === '' || value === null || value === undefined) {
      return false;
    }

    if (typeof value === 'string' && value.length === 0) {
      return false;
    }

    if (typeof value === 'object' && Object.keys(value).length === 0) {
      return false;
    }

    return true;
  }
}


