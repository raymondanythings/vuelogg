import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: string) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}

// Default Setting => 커스텀파이프 생성 시 ! 고정값 !

// 커스텀 파이프 생성 시 규칙 => PipeTransform implements 필수 => transform 매소드를 통한 변경 필수

// transform() => 첫번째 파라미터 -> 처리가 된 인자의 값
//                두번째 파라미터 -> 인자에 대한 메타 데이터를 포함한 객체
//                return => Route 핸들러로 전달
//                expect => client 바로전달

// export class BoardStatusValidationPipe implements PipeTransform {
//   transform(value: any, metadata: ArgumentMetadata) {
//     console.log('value : ', value);
//     console.log('metadata : ', metadata);
//   }
// }
