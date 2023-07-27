import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { WaitListListService } from "../list/list.service";

@Injectable()
export class WaitListItemService {
  constructor(
    @Inject(forwardRef(() => WaitListListService))
    private readonly waitListListService: WaitListListService,
  ) {}
}
