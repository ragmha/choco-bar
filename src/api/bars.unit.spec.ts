import { IResource } from '../types';
import BarsAPI from './BarsApi';
import * as Utils from '../utils';

const BarsApi: IResource = new BarsAPI();

describe('Bars Utils', () => {
  it('should calculate the number of bars', () => {
    const numberOfBars = 17;
    const quantities = [1, 12, 120];

    const result = Utils.calculateNumberOfBars(numberOfBars, quantities);
    expect(result).toEqual(5);
  });

  it('should fail calculating the number of bars', () => {
    const numberOfBars = null;
    const quantities = undefined;

    const result = Utils.calculateNumberOfBars(numberOfBars, quantities);
    expect(result).toEqual(undefined);
  });

  it('should calculate the number of packets', () => {
    const numberOfBars = 17;
    const quantities = [1, 12, 120];

    const result = Utils.calculateNumberOfPackets(numberOfBars, quantities);
    expect(result).toEqual(1);
  });

  it('should fail calculating the number of packets', () => {
    const numberOfBars = null;
    const quantities = undefined;

    const result = Utils.calculateNumberOfPackets(numberOfBars, quantities);
    expect(result).toEqual(undefined);
  });

  it('should calculate the number of boxes', () => {
    const numberOfBars = 17;
    const quantities = [1, 12, 120];

    const result = Utils.calculateNumberOfBoxes(numberOfBars, quantities);
    expect(result).toEqual(0);
  });

  it('should fail calculating the number of boxes', () => {
    const numberOfBars = null;
    const quantities = undefined;

    const result = Utils.calculateNumberOfBoxes(numberOfBars, quantities);
    expect(result).toEqual(undefined);
  });
});

describe('Bars API', () => {
  it('should run saveMoney based on numberOfBars, numberOfPackets, numberOfBoxes', () => {
    const numberOfBars = 17;
    const prices = [2.3, 25, 230];
    const quantities = [1, 12, 120];

    const saveMoney = BarsApi.saveMyMoney(numberOfBars, prices, quantities);
    expect(saveMoney).toEqual({
      numberOfBars: 5,
      numberOfPacks: 1,
      numberOfBoxes: 0,
      totalCost: 36.5,
    });
  });

  it('should fail saveMoney if numberOfBars is passed as null', () => {
    const numberOfBars = null;
    const prices = [2.3, 25, 230];
    const quantities = [1, 12, 120];
    const saveMoney = BarsApi.saveMyMoney(numberOfBars, prices, quantities);

    expect(saveMoney).toEqual({
      numberOfBars: undefined,
      numberOfPacks: undefined,
      numberOfBoxes: undefined,
      totalCost: undefined,
    });
  });
});
