
const mongoose= require('mongoose')
const bcrypt= require('bcryptjs')
const validator= require('validator')


const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin:{
      type:Boolean,
      enum:[true,false],
      default:false
    }
  },
  {
    timestamps: true,
  }
);

userSchema.methods.correctPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password)
}

userSchema.pre("save", async function (next) {
  if(!this.isModified('password')) return next()
  this.password= await bcrypt.hash(this.password,12)
})


const User = mongoose.model("User", userSchema);

module.exports= User
