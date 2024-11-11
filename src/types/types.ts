export interface FindAndExecuteFunctionArgs {
  query: string;
}
export interface FieldMetaUI {
  placeholder: string;
  default_value: string;
  field: {
    type: string; // e.g., 'TEXT', 'HIDDEN'
  };
}

export interface FieldMeta {
  id: number;
  title: string;
  description_for_users?: string;
  is_required: boolean;
  ui: FieldMetaUI;
}

export interface TemplateField {
  type: string;
  description: string;
  meta: FieldMeta;
}

export interface Parameters {
  type: string;
  properties: {
    [key: string]: TemplateField;
  };
  required: string[]; // Array of field names that are required
}

export interface Data {
  parameters: Parameters;
}
