export type WashingMachine = {
    id: number,
    available: boolean,
    fromDate: String,
    toDate: String
}

export type WashingMachineProgram = {
    id: number,
    type: String,
    temperature: number,
    duration: number,
}

export type User = {
    id?: number
    firstName: string
    lastName: string
    mobileNumber: string
}

export type Reservation = {
    id: number,
    userId: number,
    machineId: number,
    programId: number
}