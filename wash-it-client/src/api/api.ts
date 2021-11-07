import axios from "axios";

export const fetchWashingMachines = axios.get('http://localhost:8080/machine/')
export const fetchWashingPrograms = axios.get('http://localhost:8080/program/')

