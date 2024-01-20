import { Employye } from "../model/employee";
import { faker } from '@faker-js/faker';
export function randomify<T extends string>(ctx: T[]): T | null{
  if (ctx.length === 0) {
    return null; // Return null if the array is empty
  }
  const rIdx = Math.floor(Math.random() * ctx.length);
  return ctx[rIdx] satisfies string;
}
export function roundNearest(n: number, mult: number){
  return Math.round(n / mult) * mult
}
export const generateEmployee: (length: number) => Array<Employye> = (length: number) =>  {
  const groups: string[] = [
    "Finance",
    "Human Resources",
    "Information Technology",
    "Marketing",
    "Operations",
    "Research and Development",
    "Customer Service",
    "Sales",
    "Administration",
    "Legal",
    "Quality Assurance",
    "Manufacturing",
    "Logistics",
    "Supply Chain",
    "Facilities Management",
    "Product Development",
    "Public Relations",
    "Health and Safety",
    "Education and Training",
    "Project Management",
  ];
  const outputs: Employye[] = [];

  for (let index = 0; index < length; index++) {
    const fname = faker.person.firstName();
    const lname = faker.person.lastName();

    const newEmploye: Employye = {
      id: faker.string.uuid(),
      basicSalary: roundNearest(faker.number.int({min: 15000000, max: 20000000}), 10000000),
      birthDate: faker.datatype.datetime(), 
      description: "",
      email: faker.internet.email({firstName: fname, lastName: lname}),
      firstName: fname,
      group: randomify(groups) as string,
      lastName: lname,
      status: randomify(["active", "paused"]) as string,
      username: faker.person.fullName({sex: randomify(["male", "female"]) as "male" | "female" | undefined})
    }
    outputs.push(newEmploye);
  }
  return outputs;
}