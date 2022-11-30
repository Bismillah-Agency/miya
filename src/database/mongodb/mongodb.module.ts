import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:7Bwa3A96Z54Mr01E@aditif-82739033.mongo.ondigitalocean.com/miyadev?tls=true&authSource=admin&replicaSet=aditif',
    ),
  ],
})
export class MongodbModule {}
