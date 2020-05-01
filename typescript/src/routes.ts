import {Request, Response} from 'express'
import createUser from './services/CreateUser'

export function helloword(request: Request, response: Response) {
  const user = createUser({
    email: 'juliano@hotmail.com',
    password: '123456',
    techs: [
      'Node.js', 
      'ReactJS', 
      'React Native', 
      {title: 'JavaScript', experience: 100}
    ],
  });

  return response.json({message: 'Hello Word'})
}