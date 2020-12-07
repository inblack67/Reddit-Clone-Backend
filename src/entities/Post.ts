import { Field, Int, ObjectType } from "type-graphql";
import
{
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { Upvote } from "./Upvote";
import { User } from "./User";

@ObjectType()
@Entity()
export class Post extends BaseEntity
{
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column( { unique: true } )
    title!: string;

    @Field()
    @Column()
    text!: string;

    @Field()
    @Column( { type: 'int', default: 0 } )
    points!: number;

    @Field()
    @Column()
    creatorId: number;

    @Field()
    @ManyToOne( () => User, user => user.posts )
    creator: User;

    @OneToMany( () => Upvote, upvote => upvote.post )
    upvotes: Upvote[];

    @Field( () => Int, { nullable: true } )
    voteStatus: number | null | undefined;

    @Field( () => String )
    @CreateDateColumn()
    createdAt: Date;

    @Field( () => String )
    @UpdateDateColumn()
    updatedAt: Date;
}