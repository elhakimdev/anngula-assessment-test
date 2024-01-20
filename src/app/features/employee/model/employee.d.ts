export type StringAttribute = string;
export type FloatAttribute = number;
export type DoubleAttribute = number;
export type DateTimeAttribute = `${number}-${string}-${string} ${string}:${string}:${string}`;
export type DatabaseTimestampFormat = `${number}-${string}-${string}T${string}:${string}:${string}.${string}Z`;
export type DatabaseTimestamp = string & { __timestampBrand: never };

// export type JobDepartment = 
export interface Employye {
  id?: string,
  username: StringAttribute,
  firstName: StringAttribute,
  lastName: StringAttribute,
  email: StringAttribute,
  birthDate: Date | DatabaseTimestamp | DateTimeAttribute | StringAttribute,
  basicSalary: DoubleAttribute,
  status: StringAttribute,
  group: StringAttribute,
  description: Date | DatabaseTimestamp | DateTimeAttribute | StringAttribute
}