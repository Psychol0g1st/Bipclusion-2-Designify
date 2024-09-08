import { ModulesInterface } from './modules.interface';

export interface CourseInterface {
  uid: string;
  title: string;
  description: string;
  modules: ModulesInterface[];
}
