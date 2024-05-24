export interface Experience {
  id: number;
  position: string;
  company: Company;
  location: string;
  introduction: string;
  start_date: string;
  end_date: string;
  description: string;
  tasks: Task[];
  technologies: Technology[];
  milestones: Milestone[];
}

export interface Company {
  name: string;
  logo: string;
  website: string;
}

export interface Task {
  id?: number;
  description?: string;
}

export interface Technology {
  id: number;
  name: string;
}

export interface Milestone {
  id: number;
  description: string;
}
