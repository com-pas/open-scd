export function newOpenDocEvent(doc, docName, eventInitDict) {
    return new CustomEvent('open-doc', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { doc, docName, ...eventInitDict?.detail },
    });
}
//# sourceMappingURL=open-event.js.map