import mongoose from "mongoose";

//describes props required f/create new user
interface UserAttrs {
  email: string;
  password: string;
}

//describes properties f/User Model
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

//describes props f/User Document, Single User
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    //this is how mongoose does things not ts
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//maintains typing
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

const user = User.build({
  email: "asdf",
  password: "asdf",
});

export { User };
