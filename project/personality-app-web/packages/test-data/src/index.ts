import { TestConfig, ApiResponse } from '@personality-app/types';
import { questions } from './data/questions';
import { personalityTypes } from './data/personalities';

export const testConfig: TestConfig = {
  id: 'mbti-v1',
  name: 'Personality Type Test',
  description: 'Discover your personality type based on the Myers-Briggs Type Indicator framework',
  version: '1.0.0',
  questions,
  personalities: personalityTypes
};

// Mock API delay to simulate network request
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API functions (simulating future backend endpoints)
export const testDataApi = {
  async getTestConfig(): Promise<ApiResponse<TestConfig>> {
    await delay(300); // Simulate network delay
    return {
      data: testConfig,
      timestamp: new Date().toISOString()
    };
  },

  async getQuestions(): Promise<ApiResponse<typeof questions>> {
    await delay(200);
    return {
      data: questions,
      timestamp: new Date().toISOString()
    };
  },

  async getPersonalities(): Promise<ApiResponse<typeof personalityTypes>> {
    await delay(200);
    return {
      data: personalityTypes,
      timestamp: new Date().toISOString()
    };
  }
};

// Export data for direct use (current approach)
export { questions, personalityTypes };
