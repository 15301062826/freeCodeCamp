/* global describe it expect afterAll  */
import moment from 'moment-timezone';
import sinon from 'sinon';

import {
  prepUniqueDaysByHours,
  calcCurrentStreak,
  calcLongestStreak,
  getUserById
} from './user-stats';
import { mockUserID, mockApp, mockUser } from '../boot_tests/fixtures';


  describe('getUserById', () => {
    const stubUser = {
      findById(id, cb) {
        cb(null, { id: 123 });
      }
    };
    it('returns a promise', () => {
      expect.assertions(3);
      expect(typeof getUserById('123', stubUser).then).toEqual('function');
      expect(typeof getUserById('123', stubUser).catch).toEqual('function');
      expect(typeof getUserById('123', stubUser).finally).toEqual('function');
    });

    it('resolves a user for a given id', done => {
      expect.assertions(7);
      return getUserById(mockUserID, mockApp.models.User)
        .then(user => {
          expect(user).toEqual(mockUser);

          expect(user).toHaveProperty('progressTimestamps');
          expect(user).toHaveProperty('completedChallengeCount');
          expect(user).toHaveProperty('completedProjectCount');
          expect(user).toHaveProperty('completedCertCount');
          expect(user).toHaveProperty('completedLegacyCertCount');
          expect(user).toHaveProperty('completedChallenges');
        })
        .then(done)
        .catch(done);
    });

    it('throws when no user is found', done => {
      const noUserError = new Error('No user found');
      const throwyUserModel = {
        findById(_, cb) {
          cb(noUserError);
        }
      };
      expect(
        getUserById('not-a-real-id', throwyUserModel).catch(error => {
          expect(error).toEqual(noUserError);
          done();
        })
});
