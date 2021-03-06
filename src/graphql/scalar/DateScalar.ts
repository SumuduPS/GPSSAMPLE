import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date')
export class DateScalar implements CustomScalar<String, Date> {
  description = 'Date custom scalar type';

  parseValue(value: number): Date {
    return new Date(value); // value from the client
  }

  serialize(value: Date): String {
    const date=value.getUTCFullYear() +  "-" + (value.getUTCMonth()+1) + "-"  + value.getUTCDate() +" "+value.getUTCHours() +":"+value.getUTCMinutes()+":"+value.getUTCSeconds()
    return date.toString() // value sent to the client
  }

  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }
    return null;
  }
}