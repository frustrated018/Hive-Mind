interface Creator {
  name: string;
  email: string;
}

export interface Data {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  marks: number;
  difficulty: string;
  status: string;
  creator: Creator;
  due?: Date;
}
