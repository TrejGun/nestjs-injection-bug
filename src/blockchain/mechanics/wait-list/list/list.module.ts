import { forwardRef, Module } from "@nestjs/common";

import { WaitListItemModule } from "../item/item.module";
import { WaitListListService } from "./list.service";

@Module({
  imports: [forwardRef(() => WaitListItemModule)],
  providers: [WaitListListService],
  exports: [WaitListListService],
})
export class WaitListListModule {}
