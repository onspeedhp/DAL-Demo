export interface ConfigTypes {
  orgInfo: {
    userId: string;
  };
}

export const config = {
  orgInfo: {
    getterFunction: 'getDataOrgs',
    reduxObjectPath: 'orginfo',
  },
};
