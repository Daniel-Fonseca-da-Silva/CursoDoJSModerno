function compras(job1, job2)
{ 
    // Pipe ||
    const comprarSorvete = job1 || job2;
    const comprarTv50 = job1 && job2;
    // const comprarTv32 = !!(job1) ^ job2; // bitwise xor
    const comprarTv32 = job1 != job2;
    const saudavel = !comprarSorvete; // operador unário

    // Obt
    return{ comprarSorvete, comprarTv50, comprarTv32, saudavel };
}
console.log(compras(true, true));
console.log(compras(false, true));
console.log(compras(true, false));
console.log(compras(false, false));
