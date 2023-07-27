import { forwardRef, Module } from "@nestjs/common";

import { WaitListItemService } from "./item.service";
import { WaitListListModule } from "../list/list.module";

@Module({
  imports: [forwardRef(() => WaitListListModule)],
  providers: [WaitListItemService],
  exports: [WaitListItemService],
})
export class WaitListItemModule {}
