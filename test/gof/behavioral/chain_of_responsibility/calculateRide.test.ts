import {calculateFare} from "../../../../src/gof/behavioral/chain_of_responsibility/calculateRide";

test("Deve calcular o valor da corrida no horário normal", function () {
    const segments = [
        {distance: 10, date: new Date("2024-03-01T10:00:00")}
    ];
    const fare = calculateFare(segments);
    expect(fare).toBe(21)
})

test("Deve calcular o valor da corrida no horário noturno", function () {
    const segments = [
        {distance: 10, date: new Date("2024-05-07T23:00:00")}
    ];
    const fare = calculateFare(segments);
    expect(fare).toBe(39)
})

test("Deve calcular o valor da corrida no horário de domingo", function () {
    const segments = [
        {distance: 10, date: new Date("2024-05-05T10:00:00")}
    ];
    const fare = calculateFare(segments);
    expect(fare).toBe(29)
})

test("Deve calcular o valor da corrida no horário de domingo à noite", function () {
    const segments = [
        {distance: 10, date: new Date("2024-05-05T23:00:00")}
    ];
    const fare = calculateFare(segments);
    expect(fare).toBe(50)
})

test("Deve calcular o valor da corrida com tarifa mínima", function () {
    const segments = [
        {distance: 2, date: new Date("2024-05-08T10:00:00")}
    ];
    const fare = calculateFare(segments);
    expect(fare).toBe(10)
})

test("Não deve calcular o valor da corrida se a distância for inválida", function () {
    const segments = [
        {distance: -7, date: new Date("2024-03-01T10:00:00")}
    ];
    expect(() => calculateFare(segments)).toThrow(new Error("Invalid distance"));
})

test("Não deve calcular o valor da corrida se a data for inválida", function () {
    const segments = [
        {distance: 10, date: new Date("data não válida")}
    ];
    expect(() => calculateFare(segments)).toThrow(new Error("Invalid date"));
})
