import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { WaitListItemService } from "../item/item.service";

@Injectable()
export class WaitListListService {
  constructor(
    @Inject(forwardRef(() => WaitListItemService))
    private readonly waitListItemService: WaitListItemService,
  ) {}
}
