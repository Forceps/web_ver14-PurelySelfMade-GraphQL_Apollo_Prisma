export const typeDefs = ["type Subscription {\n  chatListening: Chat\n}\n\ntype Mutation {\n  createRoom(name: String!): Boolean!\n  addComment(post_id: Int!, comment: String!): Boolean!\n  deleteDir(directory_id: Int!): Boolean!\n  makeDir(name: String!, parent_id: Int!): Boolean!\n  updateDir(directory_id: Int!, name: String!, parent_id: Int!): Boolean!\n  makeGroup(name: String!, purpose: String!, participation_system: String!, withdrawal_system: String!, identiti_back_img: String, identiti_profile_img: String): Boolean!\n  imgDelete(image_id: Int!): Boolean!\n  imgUpdate(image_id: Int!, caption: String!, directory_id: Int!): Boolean!\n  imgUpload(address: [String!]!, caption: [String!]!, volume: [Int!]!, directory_id: [Int!]!, type: [String]): Boolean!\n  musicDelete(music_id: Int!): Boolean!\n  musicUpdate(music_id: Int!, caption: String!, directory_id: Int!): Boolean!\n  musicUpload(address: [String!]!, caption: [String!]!, volume: [Int!]!, directory_id: [Int!]!, type: [String]): Boolean!\n  videoDelete(video_id: Int!): Boolean!\n  videoUpdate(video_id: Int!, caption: String!, directory_id: Int!): Boolean!\n  videoUpload(address: [String!]!, caption: [String!]!, volume: [Int!]!, directory_id: [Int!]!, type: [String], thumbnail: [String]): Boolean!\n  createPost(caption: String!, content: String, directory_id: Int!): Boolean!\n  deletePost(post_id: Int!): Boolean!\n  editPost(post_id: Int!, caption: String!, content: String!, directory_id: Int!): Boolean!\n  likePost(post_id: Int!): Boolean!\n  viewPost(post_id: Int!): Boolean!\n  addFreind(respondent: Int!): Boolean!\n  addLike(post_id: Int!): Boolean!\n  deleteLike(liked_id: Int!): Boolean!\n  addSubscriber(author: Int!): Boolean!\n  watched(post_id: Int!): Boolean!\n  createAccount(username: String!, email: String!, password: String!): Boolean!\n  loginUser(email: String!, password: String!): String!\n  setAvatar(avatar: String!): Boolean!\n  setBackImg(back_img: String!): Boolean!\n}\n\ntype Query {\n  seeComments(post_id: Int!): [Comment]\n  findDirById(directory_id: Int!): Directory\n  findMyArchiveDir(directory_id: Int!): Directory\n  findMyPostDir(directory_id: Int!): Directory\n  whosePostDir(user_id: Int!): Directory\n  groupsDir(directory_id: Int!): Directory\n  groupRootDir(group_id: Int!): Directory\n  groupDetail(group_id: Int!): Group\n  seeGroups: [Group]\n  imgGet(skip: Int, take: Int): [Image]\n  musicGet(skip: Int, take: Int): [Music]!\n  videoGet(skip: Int, take: Int): [Video]\n  searchPost(keyWord: String!, user_id: Int): [Post]\n  seePost(post_id: Int!): Post\n  seePosts: [Post]\n  seeWhosePosts(user: Int!): [Post]!\n  seeFriends(proposer: Int!): [User]\n  amISubscribeOne(author: Int!): [Subscriber]\n  me: User\n  searchUser(keyWord: String!): [User]\n  seeUser(user_id: Int!): User\n}\n\ntype Comment {\n  comment_id: ID!\n  comment: String!\n  day: Int!\n  hour: Int!\n  likes: Int!\n  minute: Int!\n  month: Int!\n  post: Int!\n  user: Int!\n  year: Int!\n  converted: Boolean!\n  post_commentTopost: Post!\n  user_commentTouser: User!\n}\n\ntype Directory {\n  directory_id: ID!\n  group: Int\n  name: String!\n  parent_id: Int\n  root: Boolean!\n  user: Int\n  group_directoryTogroup: Group\n  directory: Directory\n  user_directoryTouser: User\n  post: [Post]\n  other_directory: [Directory]\n  image: [Image]\n  music: [Music]\n  video: [Video]\n}\n\ntype Friend {\n  friend_id: ID!\n  proposer: Int!\n  respondent: Int!\n  user_friend_proposerTouser: User!\n  user_friend_respondentTouser: User!\n}\n\ntype Image {\n  image_id: ID!\n  caption: String!\n  address: String!\n  type: String\n  volume: Int!\n  directory: Int!\n  directory_directoryToimage: Directory!\n}\n\ntype Liked {\n  liked_id: ID!\n  post: Int!\n  user: Int!\n  post_likedTopost: Post!\n  user_likedTouser: User!\n}\n\ntype Music {\n  music_id: ID!\n  caption: String!\n  address: String!\n  directory: Int!\n  type: String\n  volume: Int!\n  directory_directoryTomusic: Directory!\n}\n\ntype Post {\n  post_id: ID!\n  caption: String!\n  content: String\n  user: Int!\n  directory: Int!\n  year: Int!\n  month: Int!\n  day: Int!\n  hour: Int!\n  minute: Int!\n  second: Int!\n  views: Int!\n  likes: Int!\n  directory_directoryTopost: Directory!\n  user_postTouser: User!\n  comment: [Comment]!\n  liked: [Liked]!\n  watched: [Watched]!\n}\n\ntype Subscriber {\n  subscriber_id: ID!\n  reader: Int!\n  author: Int!\n  user_subscriber_authorTouser: User!\n  user_subscriber_readerTouser: User!\n}\n\ntype User {\n  user_id: ID!\n  username: String!\n  email: String!\n  password: String!\n  avatar: String\n  back_img: String\n  phone_number: Int\n  comment: [Comment]\n  directory: [Directory]!\n  friend_friend_proposerTouser: [Friend]\n  friend_friend_respondentTouser: [Friend]\n  group: [Group]\n  liked: [Liked]\n  post: [Post]\n  subscriber_subscriber_authorTouser: [Subscriber]\n  subscriber_subscriber_readerTouser: [Subscriber]\n  chat: [Chat]\n  watched: [Watched]\n}\n\ntype Video {\n  video_id: ID!\n  address: String!\n  caption: String!\n  directory: Int!\n  type: String\n  volume: Int!\n  thumbnail: String\n  directory_directoryTovideo: Directory!\n}\n\ntype Watched {\n  watched_id: ID!\n  post: Int!\n  user: Int!\n  post_postTowatched: Post!\n  user_userTowatched: User!\n}\n\ntype Group {\n  group_id: ID!\n  name: String!\n  purpose: String!\n  administrator: Int!\n  identiti_back_img: String\n  identiti_profile_img: String\n  participation_system: Int!\n  withdrawal_system: Int!\n  user: User!\n  group_system_group_participation_systemTogroup_system: Group_system!\n  group_system_group_withdrawal_systemTogroup_system: Group_system!\n  directory: [Directory]!\n}\n\ntype Group_system {\n  group_system_id: ID!\n  category: String!\n  name: String!\n  group_group_participation_systemTogroup_system: [Group]!\n  group_group_withdrawal_systemTogroup_system: [Group]!\n}\n\ntype Chat {\n  chat_id: ID!\n  user: Int!\n  room: Int!\n  comment: String!\n  year: Int!\n  month: Int!\n  day: Int!\n  hour: Int!\n  minute: Int!\n  second: Int!\n  chat_room: Chat_room!\n  user_chatTouser: User!\n}\n\ntype Chat_room {\n  chat_room_id: ID!\n  name: String!\n  chat: [Chat]\n}\n"];
/* tslint:disable */

export interface Query {
  seeComments: Array<Comment> | null;
  findDirById: Directory | null;
  findMyArchiveDir: Directory | null;
  findMyPostDir: Directory | null;
  whosePostDir: Directory | null;
  groupsDir: Directory | null;
  groupRootDir: Directory | null;
  groupDetail: Group | null;
  seeGroups: Array<Group> | null;
  imgGet: Array<Image> | null;
  musicGet: Array<Music>;
  videoGet: Array<Video> | null;
  searchPost: Array<Post> | null;
  seePost: Post | null;
  seePosts: Array<Post> | null;
  seeWhosePosts: Array<Post>;
  seeFriends: Array<User> | null;
  amISubscribeOne: Array<Subscriber> | null;
  me: User | null;
  searchUser: Array<User> | null;
  seeUser: User | null;
}

export interface SeeCommentsQueryArgs {
  post_id: number;
}

export interface FindDirByIdQueryArgs {
  directory_id: number;
}

export interface FindMyArchiveDirQueryArgs {
  directory_id: number;
}

export interface FindMyPostDirQueryArgs {
  directory_id: number;
}

export interface WhosePostDirQueryArgs {
  user_id: number;
}

export interface GroupsDirQueryArgs {
  directory_id: number;
}

export interface GroupRootDirQueryArgs {
  group_id: number;
}

export interface GroupDetailQueryArgs {
  group_id: number;
}

export interface ImgGetQueryArgs {
  skip: number | null;
  take: number | null;
}

export interface MusicGetQueryArgs {
  skip: number | null;
  take: number | null;
}

export interface VideoGetQueryArgs {
  skip: number | null;
  take: number | null;
}

export interface SearchPostQueryArgs {
  keyWord: string;
  user_id: number | null;
}

export interface SeePostQueryArgs {
  post_id: number;
}

export interface SeeWhosePostsQueryArgs {
  user: number;
}

export interface SeeFriendsQueryArgs {
  proposer: number;
}

export interface AmISubscribeOneQueryArgs {
  author: number;
}

export interface SearchUserQueryArgs {
  keyWord: string;
}

export interface SeeUserQueryArgs {
  user_id: number;
}

export interface Comment {
  comment_id: string;
  comment: string;
  day: number;
  hour: number;
  likes: number;
  minute: number;
  month: number;
  post: number;
  user: number;
  year: number;
  converted: boolean;
  post_commentTopost: Post;
  user_commentTouser: User;
}

export interface Post {
  post_id: string;
  caption: string;
  content: string | null;
  user: number;
  directory: number;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  views: number;
  likes: number;
  directory_directoryTopost: Directory;
  user_postTouser: User;
  comment: Array<Comment>;
  liked: Array<Liked>;
  watched: Array<Watched>;
}

export interface Directory {
  directory_id: string;
  group: number | null;
  name: string;
  parent_id: number | null;
  root: boolean;
  user: number | null;
  group_directoryTogroup: Group | null;
  directory: Directory | null;
  user_directoryTouser: User | null;
  post: Array<Post> | null;
  other_directory: Array<Directory> | null;
  image: Array<Image> | null;
  music: Array<Music> | null;
  video: Array<Video> | null;
}

export interface Group {
  group_id: string;
  name: string;
  purpose: string;
  administrator: number;
  identiti_back_img: string | null;
  identiti_profile_img: string | null;
  participation_system: number;
  withdrawal_system: number;
  user: User;
  group_system_group_participation_systemTogroup_system: Group_system;
  group_system_group_withdrawal_systemTogroup_system: Group_system;
  directory: Array<Directory>;
}

export interface User {
  user_id: string;
  username: string;
  email: string;
  password: string;
  avatar: string | null;
  back_img: string | null;
  phone_number: number | null;
  comment: Array<Comment> | null;
  directory: Array<Directory>;
  friend_friend_proposerTouser: Array<Friend> | null;
  friend_friend_respondentTouser: Array<Friend> | null;
  group: Array<Group> | null;
  liked: Array<Liked> | null;
  post: Array<Post> | null;
  subscriber_subscriber_authorTouser: Array<Subscriber> | null;
  subscriber_subscriber_readerTouser: Array<Subscriber> | null;
  chat: Array<Chat> | null;
  watched: Array<Watched> | null;
}

export interface Friend {
  friend_id: string;
  proposer: number;
  respondent: number;
  user_friend_proposerTouser: User;
  user_friend_respondentTouser: User;
}

export interface Liked {
  liked_id: string;
  post: number;
  user: number;
  post_likedTopost: Post;
  user_likedTouser: User;
}

export interface Subscriber {
  subscriber_id: string;
  reader: number;
  author: number;
  user_subscriber_authorTouser: User;
  user_subscriber_readerTouser: User;
}

export interface Chat {
  chat_id: string;
  user: number;
  room: number;
  comment: string;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  chat_room: Chat_room;
  user_chatTouser: User;
}

export interface Chat_room {
  chat_room_id: string;
  name: string;
  chat: Array<Chat> | null;
}

export interface Watched {
  watched_id: string;
  post: number;
  user: number;
  post_postTowatched: Post;
  user_userTowatched: User;
}

export interface Group_system {
  group_system_id: string;
  category: string;
  name: string;
  group_group_participation_systemTogroup_system: Array<Group>;
  group_group_withdrawal_systemTogroup_system: Array<Group>;
}

export interface Image {
  image_id: string;
  caption: string;
  address: string;
  type: string | null;
  volume: number;
  directory: number;
  directory_directoryToimage: Directory;
}

export interface Music {
  music_id: string;
  caption: string;
  address: string;
  directory: number;
  type: string | null;
  volume: number;
  directory_directoryTomusic: Directory;
}

export interface Video {
  video_id: string;
  address: string;
  caption: string;
  directory: number;
  type: string | null;
  volume: number;
  thumbnail: string | null;
  directory_directoryTovideo: Directory;
}

export interface Mutation {
  createRoom: boolean;
  addComment: boolean;
  deleteDir: boolean;
  makeDir: boolean;
  updateDir: boolean;
  makeGroup: boolean;
  imgDelete: boolean;
  imgUpdate: boolean;
  imgUpload: boolean;
  musicDelete: boolean;
  musicUpdate: boolean;
  musicUpload: boolean;
  videoDelete: boolean;
  videoUpdate: boolean;
  videoUpload: boolean;
  createPost: boolean;
  deletePost: boolean;
  editPost: boolean;
  likePost: boolean;
  viewPost: boolean;
  addFreind: boolean;
  addLike: boolean;
  deleteLike: boolean;
  addSubscriber: boolean;
  watched: boolean;
  createAccount: boolean;
  loginUser: string;
  setAvatar: boolean;
  setBackImg: boolean;
}

export interface CreateRoomMutationArgs {
  name: string;
}

export interface AddCommentMutationArgs {
  post_id: number;
  comment: string;
}

export interface DeleteDirMutationArgs {
  directory_id: number;
}

export interface MakeDirMutationArgs {
  name: string;
  parent_id: number;
}

export interface UpdateDirMutationArgs {
  directory_id: number;
  name: string;
  parent_id: number;
}

export interface MakeGroupMutationArgs {
  name: string;
  purpose: string;
  participation_system: string;
  withdrawal_system: string;
  identiti_back_img: string | null;
  identiti_profile_img: string | null;
}

export interface ImgDeleteMutationArgs {
  image_id: number;
}

export interface ImgUpdateMutationArgs {
  image_id: number;
  caption: string;
  directory_id: number;
}

export interface ImgUploadMutationArgs {
  address: Array<string>;
  caption: Array<string>;
  volume: Array<number>;
  directory_id: Array<number>;
  type: Array<string> | null;
}

export interface MusicDeleteMutationArgs {
  music_id: number;
}

export interface MusicUpdateMutationArgs {
  music_id: number;
  caption: string;
  directory_id: number;
}

export interface MusicUploadMutationArgs {
  address: Array<string>;
  caption: Array<string>;
  volume: Array<number>;
  directory_id: Array<number>;
  type: Array<string> | null;
}

export interface VideoDeleteMutationArgs {
  video_id: number;
}

export interface VideoUpdateMutationArgs {
  video_id: number;
  caption: string;
  directory_id: number;
}

export interface VideoUploadMutationArgs {
  address: Array<string>;
  caption: Array<string>;
  volume: Array<number>;
  directory_id: Array<number>;
  type: Array<string> | null;
  thumbnail: Array<string> | null;
}

export interface CreatePostMutationArgs {
  caption: string;
  content: string | null;
  directory_id: number;
}

export interface DeletePostMutationArgs {
  post_id: number;
}

export interface EditPostMutationArgs {
  post_id: number;
  caption: string;
  content: string;
  directory_id: number;
}

export interface LikePostMutationArgs {
  post_id: number;
}

export interface ViewPostMutationArgs {
  post_id: number;
}

export interface AddFreindMutationArgs {
  respondent: number;
}

export interface AddLikeMutationArgs {
  post_id: number;
}

export interface DeleteLikeMutationArgs {
  liked_id: number;
}

export interface AddSubscriberMutationArgs {
  author: number;
}

export interface WatchedMutationArgs {
  post_id: number;
}

export interface CreateAccountMutationArgs {
  username: string;
  email: string;
  password: string;
}

export interface LoginUserMutationArgs {
  email: string;
  password: string;
}

export interface SetAvatarMutationArgs {
  avatar: string;
}

export interface SetBackImgMutationArgs {
  back_img: string;
}

export interface Subscription {
  chatListening: Chat | null;
}
