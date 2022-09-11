import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    findOne(id: string): Promise<import("./schemas/user.schema").User>;
    create(createUserDto: CreateUserDto): Promise<import("./schemas/user.schema").User>;
}
