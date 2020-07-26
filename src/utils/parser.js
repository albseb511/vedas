function parseExpression(program) {
    program = skipSpace(program);
    let match, expr;
    if ((match = /^"([^"]*)"/.exec(program))) {
        expr = { प्रकार: "मूल्य", मूल्य: match[1] };
    } else if ((match = /^\d+\b/.exec(program))) {
        expr = { प्रकार: "मूल्य", मूल्य: Number(match[0]) };
    } else if ((match = /^[^\s(),#"]+/.exec(program))) {
        expr = { प्रकार: "अकशर", नाम: match[0] };
    } else {
        throw new SyntaxError("गलत सिनताकस: " + program);
    }
    console.log(expr, program);
    return parseApply(expr, program.slice(match[0].length));
}

function skipSpace(string) {
    let first = string.search(/\S/);
    if (first == -1) return "";
    return string.slice(first);
}

function parseApply(expr, program) {
    program = skipSpace(program);
    if (program[0] != "(") {
        return { expr: expr, rest: program };
    }

    program = skipSpace(program.slice(1));
    expr = { प्रकार: "apply", ऑपरेटर: expr, भार: [] };
    while (program[0] != ")") {
        let arg = parseExpression(program);
        expr.भार.push(arg.expr);
        program = skipSpace(arg.rest);
        if (program[0] == ",") {
        program = skipSpace(program.slice(1));
        } else if (program[0] != ")") {
        throw new SyntaxError("Expected ',' or ')'");
    }
}
    return parseApply(expr, program.slice(1));
}

function parse(program) {
    let { expr, rest } = parseExpression(program);
    if (skipSpace(rest).length > 0) {
        throw new SyntaxError("Unexpected text after program");
    }
    return expr;
}


export default parse;
