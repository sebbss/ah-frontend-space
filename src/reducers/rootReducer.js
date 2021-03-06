import { combineReducers } from 'redux';
import indexReducer from './indexReducer';
import user from './signInReducers/signInReducer';
import apiCallsInProgress from './apiStatusReducers/apiStatusReducers';
import signupReducer from './signupReducer';
import socialAuthReducer from './socialAuthReducer';
import resetPasswordReducer from './passwordResetReducers/passwordResetReducer';
import articleReducer from './articleReducer';
import articleDetailReducer from './articleReducer/articleDetailReducer';
import profileReducer from './profileReducer';
import createReducer from './createArticleReducer';
import updateArticleReducer from './articleReducer/updateArticleReducers';
import deleteArticleReducer from './articleReducer/deleteArticleReducer';
import commentReducer from './comments/CommentsReducer';
import rateArticleReducer from './rateReducer';

export default combineReducers({
  index: indexReducer,
  user,
  apiCallsInProgress,
  signupReducer,
  socialAuth: socialAuthReducer,
  resetPasswordReducer,
  articles: articleReducer,
  articleDetailReducer,
  profile: profileReducer,
  createReducer,
  updateArticleReducer,
  deleteArticleReducer,
  comments: commentReducer,
  rateArticleReducer,
});
