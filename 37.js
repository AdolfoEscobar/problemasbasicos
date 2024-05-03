function cargarNotasAlumnos(notasPorCurso) {
    const notasAlumnos = [];
    for (let i = 0; i < notasPorCurso.length; i++) {
        const curso = [];
        for (let j = 0; j < notasPorCurso[i]; j++) {
            curso.push(Math.ceil(Math.random() * 10));
        }
        notasAlumnos.push(curso);
    }
    return notasAlumnos;
}
