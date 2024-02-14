class Report {
  constructor(
    id,
    category,
    customerId,
    description,
    labels,
    owner,
    assignedTo,
    createdAt,
    editedAt,
    closedAt,
    state,
    priority,
    comments,
    closeReason,
    references
  ) {
    this.id = id;
    this.category = category;
    this.customerId = customerId;
    this.description = description;
    this.labels = labels;
    this.owner = owner;
    this.assignedTo = assignedTo;
    this.createdAt = createdAt;
    this.editedAt = editedAt;
    this.closedAt = closedAt;
    this.state = state;
    this.priority = priority;
    this.comments = comments;
    this.closeReason = closeReason;
    this.references = references;
  }
}
