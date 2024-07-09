export class Perfil {
    constructor(tamanhho, pos, corte) {
        this.tamanho = tamanhho;
        this.pos = pos;
        this.corte = corte;
        this.codigo = null;
    }
    getTamanho() {
        return this.tamanho;
    }
    getPos() {
        return this.pos;
    }
    getCorte() {
        return this.corte;
    }
}

export class LG056 extends Perfil {
    constructor(tamanho, pos, corte) {
        super(tamanho, pos, corte);
        this.kg_mt = 0.664;
        this.codigo = 'LG056';
    }
    calculaPeso() {
        return ((this.tamanho/1000) * this.kg_mt).toFixed(3);
    }
}

class LG058 extends Perfil {
    constructor(tamanho, pos, corte) {
        super(tamanho, pos, corte);
        this.kg_mt = 0.759;
        this.codigo = 'LG058';
    }
    calculaPeso() {
        return (this.tamanho/1000) * this.kg_mt;
    }
}

class LG007 extends Perfil {
    constructor(tamanho, pos, corte) {
        super(tamanho, pos, corte);
        this.kg_mt = 1.229;
        this.codigo = 'LG007';
    }
    calculaPeso() {
        return (this.tamanho/1000) * this.kg_mt;
    }
}

class LG043 extends Perfil {
    constructor(tamanho, pos, corte) {
        super(tamanho, pos, corte);
        this.kg_mt = 0.93;
        this.codigo = 'LG043';
    }
    calculaPeso() {
        return (this.tamanho/1000) * this.kg_mt;
    }
}

class LG016 extends Perfil {
    constructor(tamanho, pos, corte) {
        super(tamanho, pos, corte);
        this.kg_mt = 0.338;
        this.codigo = 'LG016';
    }
    calculaPeso() {
        return (this.tamanho/1000) * this.kg_mt;
    }
}

class LG027 extends Perfil {
    constructor(tamanho, pos, corte) {
        super(tamanho, pos, corte);
        this.kg_mt = 0.149;
        this.codigo = 'LG027';
    }
    calculaPeso() {
        return (this.tamanho/1000) * this.kg_mt;
    }
}

class VZ006 extends Perfil {
    constructor(tamanho, pos, corte) {
        super(tamanho, pos, corte);
        this.kg_mt = 0.326;
        this.codigo = 'VZ006';
    }
    calculaPeso() {
        return (this.tamanho/1000) * this.kg_mt;
    }
}

class MP347 extends Perfil {
    constructor(tamanho, pos, corte) {
        super(tamanho, pos, corte);
        this.kg_mt = 0.202;
        this.codigo = 'MP347';
    }
    calculaPeso() {
        return (this.tamanho/1000) * this.kg_mt;
    }
}

class CM063 extends Perfil {
    constructor(tamanho, pos, corte) {
        super(tamanho, pos, corte);
        this.kg_mt = 0.173;
        this.codigo = 'CM063';
    }
    calculaPeso() {
        return (this.tamanho/1000) * this.kg_mt;
    }
}