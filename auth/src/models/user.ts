import mongoose from "mongoose";

//describes props required f/create new user
interface UserAttrs {
  email: string;
  password: string;
}

//describes props f/User Model
interface UserModel extends mongoose.Model<any> {
  build(attrs: UserAttrs): any;
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

const User = mongoose.model<any, UserModel>("User", userSchema);

User.build({
  email: "asdf",
  password: "asdf",
});

export { User };
