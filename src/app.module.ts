import { Module } from '@nestjs/common'
import { UniV3Service } from './uni-v3/uni-v3.service';

@Module({
    providers: [UniV3Service]
})
export class AppModule {}
