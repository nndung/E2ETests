import {
  Given,
  When,
  Then,
  And,
  Before,
  After,
} from 'cypress-cucumber-preprocessor/steps'
import newPost from '../../page-objects/newpost-page'

After({ tags: '@addNewPost' }, () => {
  newPost.deletePostBNT.click()
})
