export interface FlexaClient {
  scan(): Promise<void>;
  spend(): Promise<void>;
}

class MockFlexaClient implements FlexaClient {
  async scan() {}
  async spend() {}
}

export const flexaClient: FlexaClient = new MockFlexaClient();
