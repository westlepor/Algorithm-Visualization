class Visualize {
    constructor(orderedTravesal, travelPath, timeout = 50) {
        this.orderedTravesal = orderedTravesal;
        this.travelPath = travelPath;
        this.traversed = [];
        this.timeout = timeout;
    }

    visualizeAlgorithm() {
        const visited = "visited"
        let i = 0;

        const loopStep = () => {
            if (i === this.orderedTravesal.length) {
                this.visualizeTravelPath();
                document.getElementsByClassName("run-path-finder")[0].disabled = false
                document.getElementsByClassName("reset-path-finder")[0].disabled = false
                return;
            }
            
            const nextPos = this.orderedTravesal[i].parsePos();

            setTimeout(() => {
                const tile = document.getElementById(nextPos);
                tile.classList.add(visited);
                this.traversed.push(nextPos);
                loopStep();
                i += 1;
            }, this.timeout);
        };
        loopStep();
    }

    visualizeTravelPath() {
        let i = 0;
        const loopStep = () => {
            if (i === this.travelPath.length) {
                return;
            }
            const nextPos = this.travelPath[i].parsePos();
            setTimeout(() => {
                const tile = document.getElementById(nextPos);
                tile.classList.add("shortest-path");
                loopStep();
                i += 1;
            }, this.timeout);
        };
        loopStep();
    }
}

Array.prototype.parsePos = function () {
    const x = this[0];
    const y = this[1];

    return `${x}-${y}`;
};

module.exports = Visualize;
