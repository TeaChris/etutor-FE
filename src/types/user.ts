/*
 * ############################################################################### *
 * Created Date: Mo Mar 2025                                                   *
 * Author: Boluwatife Olasunkanmi O.                                           *
 * -----                                                                       *
 * Last Modified: Mon Mar 10 2025                                              *
 * Modified By: Boluwatife Olasunkanmi O.                                      *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                   *
 * ############################################################################### *
 */

export interface IUserBase {
  _id: string;
  email: string;
  auth: {
    provider: string;
    roles: {
      _id: string;
      role: string;
      slug: string;
      roleType: string;
    }[];
    privileges: string[];
    account: {
      status: string;
      verification: {
        isEmailVerified: boolean;
        isMobileVerified: boolean;
        isIdVerified: boolean;
      };
      lastLogin: Date;
      loginRetries: number;
      isSuspended: boolean;
    };
  };
  createdAt: Date;
  updatedAt: Date;
}
export interface IUser extends IUserBase {
  firstName: string;
  lastName: string;
  createdBy: string;
  phone: string;
  photo: string;
  photoBlurHash: string;
}
