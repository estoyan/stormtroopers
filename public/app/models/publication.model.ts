import { Comment } from './comment.model';

export interface Publication {
    _id: string;
    owner: string;
    imageUrl: string;
    title: string;
    rating: [{
        username: string;
        rate: number
    }];
    comments: Comment[];
}
