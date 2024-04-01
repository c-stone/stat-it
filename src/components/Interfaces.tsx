// Interface for a single module component
export interface GameInfo {
  gameName: string;
  modules: Module[];
  otherUsers: string[];
}

export interface ModuleComponent {
    componentType: 'counter' | 'condition'; // Type of the component
    name: string; // Name of the component
    value?: number; // Value (only for counter components)
    enabled?: string; // Enabled values (only for condition components)
  }
  
  // Interface for a module
  export interface Module {
    name: string; // Name of the module
    components: ModuleComponent[]; // Array of components within the module
  }
  