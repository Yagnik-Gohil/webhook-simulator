const db = {
  Stripe: {
    PAYMENT_SUCCEEDED: {
      event: "PAYMENT_SUCCEEDED",
      payload: {
        amount: 5000,
        currency: "USD",
        customer: "customer_123",
        transactionId: "txn_001",
      },
    },
    PAYMENT_FAILED: {
      event: "PAYMENT_FAILED",
      payload: {
        amount: 5000,
        currency: "USD",
        customer: "customer_456",
        error: "Insufficient funds",
      },
    },
    REFUND_CREATED: {
      event: "REFUND_CREATED",
      payload: {
        refundId: "refund_123",
        amount: 2000,
        currency: "USD",
        customer: "customer_123",
      },
    },
    SUBSCRIPTION_CANCELED: {
      event: "SUBSCRIPTION_CANCELED",
      payload: {
        subscriptionId: "sub_001",
        customer: "customer_123",
        reason: "User requested cancellation",
      },
    },
  },
  Discord: {
    MESSAGE_CREATED: {
      event: "MESSAGE_CREATED",
      payload: {
        channelId: "channel_123",
        userId: "user_789",
        message: "Hello, Discord!",
      },
    },
    USER_JOINED: {
      event: "USER_JOINED",
      payload: {
        channelId: "channel_456",
        userId: "user_123",
        username: "new_user",
      },
    },
    USER_LEFT: {
      event: "USER_LEFT",
      payload: {
        channelId: "channel_789",
        userId: "user_456",
        username: "leaving_user",
      },
    },
    MESSAGE_DELETED: {
      event: "MESSAGE_DELETED",
      payload: {
        channelId: "channel_123",
        messageId: "msg_001",
        deletedBy: "moderator_789",
      },
    },
  },
  GitHub: {
    PUSH: {
      event: "PUSH",
      payload: {
        repo: "my-repo",
        branch: "main",
        commits: 3,
        author: "dev_user",
      },
    },
    ISSUE_OPENED: {
      event: "ISSUE_OPENED",
      payload: {
        repo: "my-repo",
        issueId: 101,
        title: "Bug in login flow",
        author: "tester_user",
      },
    },
    PULL_REQUEST_MERGED: {
      event: "PULL_REQUEST_MERGED",
      payload: {
        repo: "my-repo",
        pullRequestId: 202,
        branch: "feature-branch",
        mergedBy: "lead_dev",
      },
    },
    REPOSITORY_CREATED: {
      event: "REPOSITORY_CREATED",
      payload: {
        repo: "new-repo",
        createdBy: "admin_user",
        visibility: "public",
      },
    },
  },
  PayPal: {
    PAYMENT_RECEIVED: {
      event: "PAYMENT_RECEIVED",
      payload: {
        paymentId: "payment_123",
        amount: 2500,
        currency: "USD",
        payer: "payer_user",
      },
    },
    PAYMENT_REFUNDED: {
      event: "PAYMENT_REFUNDED",
      payload: {
        refundId: "refund_456",
        amount: 1000,
        currency: "USD",
        recipient: "recipient_user",
      },
    },
    INVOICE_PAID: {
      event: "INVOICE_PAID",
      payload: {
        invoiceId: "invoice_001",
        amount: 3000,
        currency: "USD",
        payer: "payer_user",
      },
    },
  },
  Twilio: {
    SMS_SENT: {
      event: "SMS_SENT",
      payload: {
        messageId: "msg_001",
        to: "+1234567890",
        from: "+0987654321",
        content: "Hello from Twilio!",
      },
    },
    CALL_RECEIVED: {
      event: "CALL_RECEIVED",
      payload: {
        callId: "call_001",
        from: "+1234567890",
        to: "+0987654321",
        duration: 120,
      },
    },
    CALL_COMPLETED: {
      event: "CALL_COMPLETED",
      payload: {
        callId: "call_002",
        duration: 300,
        status: "completed",
      },
    },
    MESSAGE_DELIVERED: {
      event: "MESSAGE_DELIVERED",
      payload: {
        messageId: "msg_123",
        to: "+1234567890",
        deliveryStatus: "delivered",
      },
    },
  },
};

module.exports = db;
